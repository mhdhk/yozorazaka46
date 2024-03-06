---
tags:
  - Debian
title: Install self-managed Gitlab CE on Debian 12
---

# Install self-managed Gitlab CE on Debian 12
---

## A. Requirements

- Internet Connection
- DNS Name
- SSL: Authority SSL / Let's Encrypt / Self-Signed

---
 

## B. Installation

### 1. **Setup repository**

Use the following command to change `/etc/apt/sources.list` as the **root** user in order to configure the repository in Debian 12:

```{.bash prefix="[root@gitlab ~]#"}
sudo su -
nano /etc/apt/sources.list
```

And then, add the following configuration to that file:

```text title="/etc/apt/sources.list"
deb http://deb.debian.org/debian bookworm main
deb-src http://deb.debian.org/debian bookworm main
   
deb http://deb.debian.org/debian-security/ bookworm-security main
deb-src http://deb.debian.org/debian-security/ bookworm-security main
    
deb http://deb.debian.org/debian bookworm-updates main
deb-src http://deb.debian.org/debian bookworm-updates main
```

### 2. Install packages dependencies and requirement

To install all packages requirement please use the following command:

```{.bash prefix="[root@gitlab ~]#"}
apt update
apt install --no-install-recommends curl openssh-server ca-certificates perl postfix -y
```

During Postfix installation, if configuration screen appear, please select ***Internet Site*** and fill ***external DNS*** with your DNS for mail name.


### 3. Add the Gitlab package repository

Package installer for Gitlab CE is not included in Debian repository. So we need to add Gitlab repository for download the installer. Use the command below to add Gitlab repository to Debian:

```{.bash prefix="[root@gitlab ~]#"}
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash
```

!!! note "Note"
        
    If self-signed SSL is used, follow the step 4 and 5, if not, skip to step 6.


### 4. Create SSL self-signed certificate

By default, Gitlab use [Let's Encrypt](https://letsencrypt.org) for generate SSL which requires inbound HTTP access and a valid hostname. In other word, you must prepare the valid hostname that can be reached by Let's Encrypt server for generating the certificate file. On this tutorial, we will create self-signed certificate with `openssl` tools. Please ensure this package is exist in your Debian. If not, use the following command to install `openssl`.

```{.bash prefix="[root@gitlab ~]#"}
apt install openssl -y
```

Then, to create self-signed certificate please follow:

```{.bash prefix="[root@gitlab ~]#"}
mkdir /etc/gitlab/ssl
chmod 755 /etc/gitlab/ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/gitlab/ssl/host.domain.key -out /etc/gitlab/ssl/host.domain.crt
```

Change the **domain** with your domain name.


### 5. Edit Gitlab configuration file

Because we use self-signed certificate, we need to custom Gitlab configuration file on `/etc/gitlab/gitlab.rb`. Use this command to edit Gitlab configuration file:

```{.bash prefix="[root@gitlab ~]#"}
nano /etc/gitlab/gitlab.rb
```

And then search for **letsencrypt** parameter, then set to **disable**.

```text title="/etc/gitlab/gitlab.rb"
letsencrypt['enable'] = false
```

Save the changes and exit.


### 6. Install Gitlab CE

!!! note "Note"

    Change `EXTERNAL_URL` value to your custom URL for Gitlab CE.

Install Gitlab CE with this following command:

```{.bash prefix="[root@gitlab ~]#"}
EXTERNAL_URL="https://gitlab.example.com" apt install gitlab-ce
```

### 7. Browse Gitlab URL on browser

After the installation process has succeed, then access the Gitlab CE on your browser with this:

> https://gitlab.example.com
