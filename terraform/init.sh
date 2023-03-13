#!/bin/bash
# This script is used to initialize the environment for the
# AWS ubuntu instance.

# Install the required packages
sudo apt-get update
sudo apt-get upgrade -y

# install git
sudo apt-get install git -y

# install docker
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get install -y docker-ce
sudo service docker start
sudo docker pull plantie94/Portfolio:0.1.0
sudo usermod -aG docker $USER && newgrp docker



# install nginx
sudo apt-get install nginx -y