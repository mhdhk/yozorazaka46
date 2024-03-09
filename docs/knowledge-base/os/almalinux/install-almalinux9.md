---
tags:
  - AlmaLinux   
title: Install AlmaLinux 9 Minimal Version
---


# Install AlmaLinux 9 Minimal Version
---


AlmaLinux is a community distribution that offers RHEL-compatible applications, which it's a good choice if you wish to utilize it as an alternative to RHEL. Since this is a community distribution, you can only obtain support or guidance from the online community forum. You are not required to purchase a subscription or obtain a license in order to receive software or package updates.

**Minimal requirements for AlmaLinux 9 minimal installation:**

- 64-bit platform support
- 1 GiB of memory (RAM)
- 10 GiB of disk capacity
- A network card


## Get AlmaLinux 9 ISO

 Since AlmaLinux is flexible, it may be run on a cloud platform, as a virtual machine (VM), or on bare metal (it means you can install it on a server or your laptop or PC).

To get AlmaLinux ISO images, you can access the official website in here: [https://almalinux.org/get-almalinux/](https://almalinux.org/get-almalinux/). 

Because we will install AlmaLinux as a minimal installation, please choose **AlmaLinux OS Minimal ISO** to be downloaded.

<figure markdown="span">
  <center>![Download AlmaLinux 9 ISO](https://i.imgur.com/V7TK7Jk.png)</center>
  <figcaption>Image 0 - Download AlmaLinux ISO</figcaption>
</figure>

## Performing AlmaLinux Installation

In this tutorial, we will install AlmaLinux as a VM on the top of VMWare Workstation.


### 1. Boot Menu

The AlmaLinux 9 installation boot menu will appear after the DVD has been booted up. Since our goal is to perform a fresh installation, we select the **Install AlmaLinux 9.x** option.

<figure markdown="span">
  <center>![Choose boot menu options](https://i.imgur.com/6luIYXc.png)</center>
  <figcaption>Image 1.1 - Choose boot menu options</figcaption>
</figure>

After we choose the option, the loading screen will appear as a image below:

<figure markdown="span">
  <center>![Boot loading screen](https://i.imgur.com/HzUl0Zi.png)</center>
  <figcaption>Image 1.2 - Boot loading screen</figcaption>
</figure>

Once the loading has complete, the screen will show the **Welcome Screen**. From this screen, you can select the language which **you will use during the installation process**.

<figure markdown="span">
  <center>![Welcome screen](https://i.imgur.com/YzECgh9.png)</center>
  <figcaption>Image 1.3 - Welcome screen</figcaption>
</figure>


### 2. Installation Summary

Upon choosing the language for installation, the **Installation Summary** screen will appear. You can select the options for your AlmaLinux settings from this screen.

<figure markdown="span">
  <center>![Installation summary screen](https://i.imgur.com/75GHIAc.png)</center>
  <figcaption>Image 2.1 - Installation summary screen</figcaption>
</figure>


#### a. Setup Localization

On this section we will setup **Keyboard Layout**, **Language Support**, and **Time and Date**.

!!! info
    Once you have finished configuring each menu, click **Done** to return to the Installation Summary screen.


##### a.1. Keyboard Layout

This option can be used for:

- Preview and test keyboard layout setup
- Add another keyboard layout
- Set keyboard layout setup priorities
- Configure hotkey for change keyboard layout

<figure markdown="span">
  <center>![Keyboard layout screen](https://i.imgur.com/OWGUgAP.png)</center>
  <figcaption>Image 2.2 - Keyboard layout screen</figcaption>
</figure>


##### a.2. Language Support

Select another language you want to install on the AlmaLinux.

<figure markdown="span">
  <center>![Language support](https://i.imgur.com/cO9k0t0.png)</center>
  <figcaption>Image 2.3 - Language support </figcaption>
</figure>


##### a.3. Time and Date Setup

The time and date can be automatically set on this menu according to your city and region. If you click or drag and drop on the map section, AlmaLinux will automatically adjust the date and time for you. Alternatively, you can specify your location using the dropdown box at the top of the map. 

!!! note
    Please take a note, you can't set your time and date manually if you enable the **Network Time**. 

<figure markdown="span">
  <center>![Setup time and date](https://i.imgur.com/2KEb15s.png)</center>
  <figcaption>Image 2.4 - Setup time and date </figcaption>
</figure>

In addition, the date and time can be set via **Network Time Protocols (NTP)**. But before you can use the NTP, you have to configure the network connection first. To configure the server use NTP, click the **settings icon** at the right top of the map to add the NTP servers pool to the menu and start using NTP (Please find on the *Image 2.5 - Setup time and date with NTP*). The NTP server pool address is available at [https://www.ntppool.org/en/](https://www.ntppool.org/).

<figure markdown="span">
  <center>![Setup time and date with NTP](https://i.imgur.com/a18ojuI.png)</center>
  <figcaption>Image 2.5 - Setup time and date with NTP</figcaption>
</figure>


#### b. Setup Software

This section will setup installation media source and selecting the software/packages which will be installed on AlmaLinux.


##### b.1. Selecting Installation Source

On this menu you can choose the installation media source. Since we booted from DVD, there is nothing to specify. Alternatively, if you have installation media in shared folder in network, you can choose the network installation source for the installation.

<figure markdown="span">
  <center>![Select installation source](https://i.imgur.com/ydnPrvC.png)</center>
  <figcaption>Image 2.6 - Select installation source</figcaption>
</figure>


##### b.2. Selecting Software to be Installed

In this section, we will select the base environment for AlmaLinux installation. To install AlmaLinux as minimal version, select **Minimal Install** in the base environment and leave **Additional software** as the default.

<figure markdown="span">
  <center>![Select software installation](https://i.imgur.com/njVFoQ6.png)</center>
  <figcaption>Image 2.7 - Select software installation</figcaption>
</figure>


#### c. Setup AlmaLinux System

This step will configure disk partition, network and hostname, kernel dump and security baseline for AlmaLinux. 


##### c.1. Disk partitioning

When you select the **Installation Destination** menu item or option, the installer will automatically select the automated storage configuration. Using this option is recommended if you haven't ever partitioned a disk on a Linux system before. However, from our point of view, we recommend using **custom** partitioning.

- If you choose automatic partitioning, just click **Done** to back to Installation Summary screen.

<figure markdown="span">
  <center>![Automatic partitioning](https://i.imgur.com/qs6LRqi.png)</center>
  <figcaption>Image 2.8 - Automatic partitioning</figcaption>
</figure>

- If you select custom partitioning, the following screen will show up once you click **Done**. Simply click **Click here to build them automatically** on this screen to enable the installer to construct a partition layout on its own. The distinction between this stage and the previously mentioned *automatic partition* is one of increased flexibility. During this step, you retain the ability to specify the mount point, disk capacity, and disk type for each individual mount point. 

<figure markdown="span">
  <center>![Custom partitioning](https://i.imgur.com/oJyuc7J.png)</center>
  <figcaption>Image 2.9 - Custom partitioning</figcaption>
</figure>

After you've finished customizing the partitions, select **Done** to view a summary of the customized partition layout you've made. Review the changes, and if everything looks good, click **Accept changes**.

<figure markdown="span">
  <center>![Review layout partition](https://i.imgur.com/c5DAi1c.png)</center>
  <figcaption>Image 2.10 - Review layout partition</figcaption>
</figure>


##### c.2. Configure Kernel Dump

The kernel dump mechanism is used to generate a core dump in the event of a critical issue occurring on your AlmaLinux system. We highly recommend enabling this option in a **production environment**. Because at this time we install this system on development/local environment, we just disable it.

<figure markdown="span">
  <center>![Kernel dump](https://i.imgur.com/eJpC4U0.png)</center>
  <figcaption>Image 2.11 - Kernel dump</figcaption>
</figure>


##### c.3. Setup Network and Hostname

The next step involves setting up networking in the AlmaLinux system. In this section, you will need to configure the IP address, subnet mask, gateway, and name server for the AlmaLinux system. However, the initial step is to set the Hostname for the system. Referencing the image below (2.12), you will find the procedure for setting a hostname and configuring the IP address for the system. Remember to click **Apply** after setting the hostname!

!!! info
    If you have configured the network adapter to use **NAT** in VirtualBox or VMware Workstation, the IP address will appear automatically. This IP address will remain accessible for internet connection (depending on your configuration), but it will not be accessible from outside networks.

<figure markdown="span">
  <center>![Network and hostname](https://i.imgur.com/8l92ZiT.png)</center>
  <figcaption>Image 2.12 - Network and hostname</figcaption>
</figure>

Once you click **configure**, the form for configure addressing will appear. You have the option to choose between using either static or DHCP for the IP Address configuration. The example image below illustrates how to set up either static or DHCP addressing for your system.

- For DHCP uses.

<figure markdown="span">
  <center>![DHCP address](https://i.imgur.com/XCVSwaE.png)</center>
  <figcaption>Image 2.13 - DHCP address</figcaption>
</figure>

- For static uses, click **Add** to insert IP address.

<figure markdown="span">
  <center>![Static address](https://i.imgur.com/2JuviUj.png)</center>
  <figcaption>Image 2.14 - Static address</figcaption>
</figure>

Remember to enable the network connection on this menu:

<figure markdown="span">
  <center>![Enable network](https://i.imgur.com/mnrcsqJ.png)</center>
  <figcaption>Image 2.15 - Enable network</figcaption>
</figure>


##### c.4. Select Security Profiles

This section enables you to select a security profile to adhere to AlmaLinux system security standards based on rules provided by organizations like CIS, ANSSI, etc. Please note, only enable this if you are certain about your choice. If you are unsure, simply leave it disabled as shown in the image below.

<figure markdown="span">
  <center>![Security profiles](https://i.imgur.com/iqbRjIA.png)</center>
  <figcaption>Image 2.16 - Security profiles</figcaption>
</figure>


#### d. Setup User Account

In this last section we will setup root user account and general user for using AlmaLinux system.


##### d.1. Setup root Account

Simply enter the root password, and then click **Done**. If the system detects that your password is not strong enough, you will need to click **Done** twice. Additionally, there are two options available after you have set the password. Enabling **Lock root account** means your root account cannot be used for interactive logins (such as SSH or other protocols). The root account will only be used for applications or services running on the system. Enabling **Allow root SSH login with password** means you can establish an SSH connection as the root user using the root password. However, this is not recommended for production use due to security reasons, so we advise you to disable this option.

<figure markdown="span">
  <center>![root account](https://i.imgur.com/mMPNYqs.png)</center>
  <figcaption>Image 2.17 - root account</figcaption>
</figure>


##### d.2. Setup General User

When you click **User Creation**, a form for creating a new user will appear. Fill in the necessary information for the new user as a standard user. The option **Make this user administrator** is used to add the user to the sudoers (wheel) group, allowing the user to execute commands or Linux operations equivalent to those of the root user. Enabling **Require a password to use this account** means that the user will need to enter a password for interactive logins.

<figure markdown="span">
  <center>![General user](https://i.imgur.com/bzskCiv.png)</center>
  <figcaption>Image 2.18 - General user</figcaption>
</figure>


### 3. Finalizing the Setup

Once you have specified all the settings in the Installation Summary, you can initiate the installation process by clicking the **Begin Installation** button. Simply wait for the installation to complete, and then you can reboot the system to finalize the installation process.

<figure markdown="span">
  <center>![General user](https://i.imgur.com/fuqsTIr.png)</center>
  <figcaption>Image 3.1 - Reboot system</figcaption>
</figure>

After the system has booted up, you will encounter the login screen. Use your general user account credentials to log in to the system. Additionally, you can verify sudo access by using the command `sudo su -` and entering the same password as your user account.

<figure markdown="span">
  <center>![Login for first time](https://i.imgur.com/jDHabdW.png)</center>
  <figcaption>Image 3.2 - Login for first time</figcaption>
</figure>

That's it, you have completing AlmaLinux installation. Now, it is up to you to configuring the system according to your preferences and needs! Happy RnD!