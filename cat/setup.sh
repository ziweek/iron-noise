#!/bin/bash

# Define the name of the virtual environment
ENV_NAME="cat"

# Create and activate the virtual environment
echo "Creating virtual environment..."
pyenv virtualenv 3.8 $ENV_NAME

# Create and activate the virtual environment
echo "Activating virtual environment..."
pyenv activate $ENV_NAME

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install core libraries and dependencies
echo "Installing core libraries..."
pip install torch torchvision torchaudio
pip install librosa numpy scipy
pip install openai-whisper
pip install jiwer
pip install scikit-learn pytorch-lightning
pip install matplotlib seaborn pandas tqdm
pip install notebook ipython

# Optional: Install any additional packages
# pip install <additional_package>

# Verify the installation
echo "Verifying installation..."
python -c "import torch; import librosa; import whisper; import jiwer; import matplotlib; print('All packages installed successfully.')"

echo "Setup complete. Virtual environment '$ENV_NAME' is ready for use."
