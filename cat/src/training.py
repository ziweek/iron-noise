# import torch
# import torch.nn as nn
# import torch.optim as optim
# from torch.utils.data import DataLoader, Dataset

# import librosa
# import jiwer
# import whisper
# import numpy as np

# from data_loader import load_audio, extract_stft_features, load_transcription
# from model import NoiseGenerator
# from config import *


# # Load the Whisper model
# model = whisper.load_model("base")  # Choose the appropriate model size: tiny, base, small, medium, large

# def transcribe_audio(file_path):
#     result = model.transcribe(file_path)
#     return result['text']


# def apply_noise(original_audio, noise, noise_scale=1.0):
#     """
#     Applies noise to the original audio signal.

#     Args:
#         original_audio (numpy.ndarray): The original clean audio signal.
#         noise (numpy.ndarray): The generated noise to be added.
#         noise_scale (float): Scaling factor for the noise. Adjust as needed.

#     Returns:
#         numpy.ndarray: The audio signal with added noise.
#     """
#     # Ensure that the noise and audio have the same length
#     if len(original_audio) != len(noise):
#         raise ValueError("The length of the noise and original audio must be the same.")
    
#     # Scale the noise
#     scaled_noise = noise * noise_scale
    
#     # Add the scaled noise to the original audio
#     perturbed_audio = original_audio + scaled_noise
    
#     # Optionally, you can normalize the perturbed audio to avoid clipping
#     max_amplitude = np.max(np.abs(perturbed_audio))
#     if max_amplitude > 1.0:
#         perturbed_audio = perturbed_audio / max_amplitude
    
#     return perturbed_audio


# # Compute ASR Loss Using Whisper:
# def compute_asr_loss(original_transcription, perturbed_audio_path):
#     # Save perturbed audio to a temporary file
#     temp_file_path = 'temp_perturbed.wav'
#     librosa.output.write_wav(temp_file_path, perturbed_audio, sr=16000)
    
#     # Transcribe perturbed audio using Whisper
#     asr_transcription = transcribe_audio(temp_file_path)
    
#     # Compute the Word Error Rate (WER) between original and perturbed transcriptions
#     loss = jiwer.wer(original_transcription, asr_transcription)
    
#     return loss

# # Define your dataset class
# class SpeechDataset(Dataset):
#     def __init__(self, audio_paths, transcription_paths):
#         self.audio_paths = audio_paths
#         self.transcription_paths = transcription_paths

#     def __len__(self):
#         return len(self.audio_paths)

#     def __getitem__(self, idx):
#         audio, sr = load_audio(self.audio_paths[idx])
#         stft_features = extract_stft_features(audio, sr)
#         transcription = load_transcription(self.transcription_paths[idx])
#         return torch.tensor(stft_features, dtype=torch.float32), transcription



# # Initialize dataset and dataloader
# dataset = SpeechDataset(audio_paths=audio_paths, transcription_paths=transcription_paths)
# dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

# # Define the model, optimizer, and loss function
# model = NoiseGenerator()
# optimizer = optim.Adam(model.parameters(), lr=lr)

# # Training loop
# num_epochs = num_epochs  # Set the number of epochs as needed
# for epoch in range(num_epochs):
#     for stft_features, original_transcription in dataloader:
#         optimizer.zero_grad()
        
#         # Generate noise
#         noise = model(stft_features)
#         noise = noise.squeeze().detach().numpy()
        
#         # Apply noise to the audio
#         original_audio, sr = load_audio('path/to/audio.wav')
#         perturbed_audio = apply_noise(original_audio, noise)
        
#         # Compute the target loss using Whisper
#         target_loss = compute_asr_loss(original_transcription, perturbed_audio)
        
#         # Backward and optimize
#         loss = torch.tensor(target_loss, requires_grad=True)
#         loss.backward()
#         optimizer.step()
    
#     print(f'Epoch {epoch+1}/{num_epochs}, Loss: {loss.item()}')


import json
from src.loader.data_module import DeepSpeechDataModule
from src.model import DeepSpeech, AudioVisualNet, JointModel, WhisperASR

from hydra.utils import to_absolute_path
from pytorch_lightning import seed_everything
from pytorch_lightning import loggers as pl_loggers, Trainer
from pytorch_lightning.callbacks import ModelCheckpoint
from omegaconf.dictconfig import DictConfig

import os
from hydra import utils
from pytorch_lightning.callbacks import LearningRateMonitor
import torch
torch.autograd.set_detect_anomaly(True)

def train(cfg: DictConfig):

    os.chdir(utils.get_original_cwd())

    percent = cfg.data.spect.size

    waveform=cfg.waveform
    firstlayer=cfg.firstlayer
    capped=cfg.capped
    power= cfg.power
    power_penalization=cfg.powerpenalization
    future = cfg.future

    if capped:
        wandb_path = "future50_clean_notdenoiser_waveform_scalar_" + str(waveform) + "_future_" + str(future) + "_future_amt" + str(cfg.future_amt) +  "_firstlayer_" + str(firstlayer) + "_capped_" + str(capped)  + "_power_" + str(power) + "_lr_" + \
                     str(cfg.optim.learning_rate)
    else:
        wandb_path = "test_waveform_scalar_" + str(waveform) + "_future_" + str(future) + "_future_amt" + str(cfg.future_amt) + "_firstlayer_" + str(firstlayer) + "_capped_" + str(
            capped) + "_powerpen_" + str(power_penalization) + "_lr_" + \
                     str(cfg.optim.learning_rate)


    if not os.path.isdir(wandb_path):
        os.mkdir(wandb_path)

    os.chdir(wandb_path)
    seed_everything(cfg.SEED)
    lr_monitor = LearningRateMonitor(logging_interval='step')

    with open(to_absolute_path(cfg.data.labels_path)) as label_file:
        labels = json.load(label_file)

    if cfg.trainer.accelerator == "ddp":
        is_distributed=True
    else:
        is_distributed=False

    data_loader = DeepSpeechDataModule(
        labels=labels,
        data_cfg=cfg.data,
        normalize=True,
        is_distributed=is_distributed
    )

    # model = DeepSpeech(
    #     wandb=cfg.wandb,
    #     future=cfg.future,
    #     future_amt=cfg.future_amt,
    #     residual=cfg.residual,
    #     batchnorm=cfg.batchnorm,
    #     waveform=cfg.waveform,
    #     firstlayer=cfg.firstlayer,
    #     capped=cfg.capped,
    #     inputreal=cfg.inputreal,
    #     power=cfg.power,
    #     labels=labels,
    #     model_cfg=cfg.model,
    #     optim_cfg=cfg.optim,
    #     precision=cfg.trainer.precision,
    #     spect_cfg=cfg.data.spect
    # )
    
    model = WhisperASR(
        wandb=cfg.wandb,
        future=cfg.future,
        future_amt=cfg.future_amt,
        residual=cfg.residual,
        batchnorm=cfg.batchnorm,
        waveform=cfg.waveform,
        firstlayer=cfg.firstlayer,
        capped=cfg.capped,
        inputreal=cfg.inputreal,
        power=cfg.power,
        labels=labels,
        model_cfg=cfg.model,
        optim_cfg=cfg.optim,
        precision=cfg.trainer.precision,
        spect_cfg=cfg.data.spect
    )


    # model.load_state_dict(torch.load("../../../../deepspeechattack/deepspeech.pytorch/librispeech_model_statedict.pth"),strict=False)
    # model.load_state_dict(torch.load("../future50_clean_notdenoiser_waveform_scalar_True_future_True_future_amt50_firstlayer_False_capped_True_power_0.008_lr_0.00015/epoch=06-stepstep=253349.00.ckpt"),strict=False)
    if cfg.wandb:
        logger = pl_loggers.WandbLogger(name=wandb_path, save_dir="", project="noise")


    checkpoint_file = "{epoch:02d}-step{step:.2f}"
    checkpoint_callback = ModelCheckpoint(filename=checkpoint_file,dirpath="check", every_n_train_steps=50, save_top_k=-1)

    if cfg.wandb:
        trainer = Trainer(callbacks=[lr_monitor,checkpoint_callback],logger = logger,
            **cfg.trainer)
    else:
        trainer = Trainer(callbacks=[lr_monitor,checkpoint_callback],
                          **cfg.trainer)

    trainer.fit(model,data_loader.train_dataloader(),data_loader.val_dataloader())