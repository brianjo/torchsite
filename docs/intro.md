---
sidebar_position: 1
title: Start Locally
---

Select your preferences and run the install command. Stable represents the most currently tested and supported version of PyTorch. This should be suitable for many users. Preview is available if you want the latest, not fully tested and supported, builds that are generated nightly. Please ensure that you have **met the prerequisites below (e.g., numpy)**, depending on your package manager. Anaconda is our recommended package manager since it installs all dependencies. You can also [install previous versions of PyTorch](https://pytorch.org/get-started/previous-versions). Note that LibTorch is only available for C++.

Default


```
# MPS acceleration is available on MacOS 12.3+
conda install pytorch torchvision torchaudio -c pytorch
```


**NOTE:** PyTorch LTS has been deprecated. For more information, see [this blog](https://pytorch.org/blog/pytorch-enterprise-support-update/).


# Installing on macOS

### PyTorch can be installed and used on macOS. Depending on your system and GPU capabilities, your experience with PyTorch on a Mac may vary in terms of processing time.

## PREREQUISITES

### macOS Version

### PyTorch is supported on macOS 10.15 (Catalina) or above.

### Python

### It is recommended that you use Python 3.7 or greater, which can be installed either through the Anaconda package manager (see [below](https://pytorch.org/get-started/locally/#anaconda)), [Homebrew](https://brew.sh/), or the [Python website](https://www.python.org/downloads/mac-osx/).

### Package Manager

### To install the PyTorch binaries, you will need to use one of two supported package managers: [Anaconda](https://www.anaconda.com/download/#macos) or [pip](https://pypi.org/project/pip/). Anaconda is the recommended package manager as it will provide you all of the PyTorch dependencies in one, sandboxed install, including Python.

#### Anaconda

#### To install Anaconda, you can [download graphical installer](https://www.anaconda.com/download/#macos) or use the command-line installer. If you use the command-line installer, you can right-click on the installer link, select `Copy Link Address`, or use the following commands on Intel Mac:



```
*# The version of Anaconda may be different depending on when you are installing`*
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
sh Miniconda3-latest-MacOSX-x86_64.sh*# and follow the prompts. The defaults are generally good.`*

```

or following commands on M1 Mac:


```
*# The version of Anaconda may be different depending on when you are installing`*
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
sh Miniconda3-latest-MacOSX-arm64.sh*# and follow the prompts. The defaults are generally good.`*

```

#### pip

#### *Python 3*

If you installed Python via Homebrew or the Python website, `pip` was installed with it. If you installed Python 3.x, then you will be using the command `pip3`.
*Tip: If you want to use just the command `pip`, instead of `pip3`, you can symlink `pip` to the `pip3` binary.*

## INSTALLATION

### Anaconda

### To install PyTorch via Anaconda, use the following conda command:



```
conda install pytorch torchvision -c pytorch
```

### pip

### To install PyTorch via pip, use one of the following two commands, depending on your Python version:



```
*# Python 3.x*
pip3 install torch torchvision
```

## VERIFICATION

## To ensure that PyTorch was installed correctly, we can verify the installation by running sample PyTorch code. Here we will construct a randomly initialized tensor.



```
**import** torch
x **=** torch.rand(5, 3)
**print**(x)

```

The output should be something similar to:


```
tensor([[0.3380, 0.3845, 0.3217],
        [0.8337, 0.9050, 0.2650],
        [0.2979, 0.7141, 0.9069],
        [0.1449, 0.1132, 0.1375],
        [0.4675, 0.3947, 0.1426]])
```

## BUILDING FROM SOURCE

## For the majority of PyTorch users, installing from a pre-built binary via a package manager will provide the best experience. However, there are times when you may want to install the bleeding edge PyTorch code, whether for testing or actual development on the PyTorch core. To install the latest PyTorch code, you will need to [build PyTorch from source](https://github.com/pytorch/pytorch#from-source).

### Prerequisites

1. [Optional] Install [Anaconda](https://pytorch.org/get-started/locally/#anaconda)
2. Follow the steps described here: https://github.com/pytorch/pytorch#from-source

You can verify the installation as described [above](https://pytorch.org/get-started/locally/#mac-verification).
