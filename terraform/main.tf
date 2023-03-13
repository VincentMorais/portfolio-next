terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.4.0"
}


resource "aws_instance" "app_server" {
  ami           = "ami-03c476a1ca8e3ebdc"
  instance_type = "t2.micro"

  tags = {
    Name = "Portfolio"
  }

  key_name = aws_key_pair.ssh_key.key_name

  vpc_security_group_ids = [aws_security_group.portfoliovpc.id]

  # use init.sh for initialisation
  user_data = file("./init.sh")

}
resource "aws_key_pair" "ssh_key" {
  key_name   = "ssh_key"
  public_key = file("./id_ed25519.pub")
}
resource "aws_security_group" "portfoliovpc" {
  name             = "portfoliovpc"
  vpc_id           = "vpc-0347eb025293d5db7"

  ingress {
    description = "http"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "ssh"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "all"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "ftp" {
  type              = "ingress"
  from_port         = 20
  to_port           = 21
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.portfoliovpc.id
}