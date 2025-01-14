<img src="./src/banner_en.png"/>

<p align="center">
  <a href='https://github.com/ziweek/desirable-sea/blob/main/README_EN.md'>
    ENGLISH
  </a>
  &nbsp;|&nbsp;
  <a href='https://github.com/ziweek/desirable-sea/blob/main/README.md'>
    KOREAN
  </a>
  <br/>
  <br/>
  <strong>🏆 Chief of Staff of the Republic of Korea Army Award, in 1st Defense AI Idea Hackathon 🏆</strong>
  <br/>
  <br/>
  <strong>Deep-Learning Based Real-Time Voice Camouflage System Disrupting AI Eavesdropping</strong>
  <br/>
  <br/>

  <a href='https://paperswithcode.com/paper/real-time-neural-voice-camouflage-1'>
    <img src="https://img.shields.io/badge/Paperswithcode-Real%20Time%20Neural%20Voice%20Camouflage-25c2a0?style=flat-square"/>
  </a>
  <br/>
  <br/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <br/>
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white"/>
  <br/>
  <img src="https://img.shields.io/badge/Weights%20&%20Biases-dea500?style=flat-square&logo=weightsandbiases&logoColor=white&text=white"/>
</p>
<br/>
<br/>
  
<p align="center">  
  <strong>Let's try the product from below badge link<strong>
  <br/>
  <br/>
  <a href='https://iron-noise.vercel.app/'>
    <img src="https://img.shields.io/badge/Product-Vercel-000000?style=flat-square"/>
  </a>
  <a href='https://colab.research.google.com/drive/1ysSkpS1vuK5xsW9PE0ojAfXzCzRB_3ou?usp=sharing'>
    <img src="https://img.shields.io/badge/Tutorial-Google%20Colab-F9AB00?style=flat-square"/>
  </a>
  <a href='https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=&topMenu=&aihubDataSe=data&dataSetSn=132'>
    <img src="https://img.shields.io/badge/Dataset-AiHub%20회의음성-FF5A5F?style=flat-square"/>
  </a>
</p>

<br/>
<br/>

# 1. 개요

> [!NOTE]
>
> - This project aims to develop a service where anyone can effortlessly create a customized certificate in just a few minutes, making it easy to celebrate and appreciate others.
> - Award Factory was conceived as a heartwarming project to spread happiness, inspired by the idea of creating special certificates for parents. Built with sustainability in mind, the service integrates front-end components and leverages the fine-tuned Google Gemma:2b model to deliver personalized award texts. While the service is not fully active due to server operation costs, a demo is available on Huggingface.
> - Advanced technologies like QLoRA quantization and llama-cpp optimizations were employed to reduce model size and improve performance, ensuring an efficient user experience in the future.

https://github.com/user-attachments/assets/2def17e0-46ea-4561-8b50-fc78d595b88b

<table>
    <tr>
    <td style="width:1/2;">
      <p align="center">App Design</p>
    </td>
    <td style="width:1/2;">
      <p align="center">3D Printing</p>
    </td>
  </tr>
  <tr>
    <td style="width:1/2;">
      <img src="./src/app-design.png"/>
    </td>
    <td style="width:1/2;">
      <img src="./src/3d-printing.png"/>
    </td>
  </tr>
</table>
<br/>
<br/>

# Implementation

<table>
  <tr>
    <td style="width:1/2;">
      <img src="./src/diagram.png"/>
    </td>
  </tr>
</table>

<details open>
 <summary><b>Google Gemma:2B Finetuning</b></summary>
Implemented prompt engineering and QLoRA-based quantization fine-tuning using the Google/Gemma-2b-it model with PEFT techniques to optimize personalized award text generation tailored to user preferences.
</details>
<br/>

<details open>
 <summary><b>llama-cpp Quantization</b></summary>
Applied quantization with the Q5_K_M option in llama-cpp, achieving a 63.3% reduction in model size and an 83.4% decrease in inference time without compromising performance, enabling faster and more efficient service.

<br/>

```
$ llama.cpp/llama-quantize gguf_model/gemma-2b-it-award-factory-v2.gguf gguf_model/gemma-2b-it-award-factory-v2.gguf-Q5_K_M.gguf Q5_K_M

...
llama_model_quantize_internal: model size  =  4780.29 MB
llama_model_quantize_internal: quant size  =  1748.67 MB

main: quantize time = 17999.81 ms
main:    total time = 17999.81 ms
```

```
$ ollama list

NAME                    ID              SIZE      MODIFIED
award-factory:q5        8df06172b64b    1.8 GB    19 seconds ago
award-factory:latest    ae186115cc83    5.0 GB    28 minutes ago
```

</details>
<br/>

<details open>
  <summary><b>Docker-compose</b></summary>
Utilized Docker Compose to containerize the backend and frontend services, ensuring consistency in deployment environments and facilitating scalable and maintainable full-stack web application development.
</details>
<br/>
<br/>

# Contribution

<a href="https://github.com/ziweek/award-factory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ziweek/iron-noise" />
</a>
