# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network :private_network, ip: '192.168.24.24'
  
  # Vagrant leitet jede Anfrage an den Port 8080 des Hosts an den Port 80 der VM
  config.vm.network "forwarded_port", guest: 80, host: 8080
  
  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder "htdocs/", "/var/www/gwrslokal/htdocs", owner: "root", group: "root"
  
  config.vm.synced_folder "vhosts/", "/etc/apache2/sites-available", owner: "root", group: "root"
end
