# dCloud CWCC Toolbox UI
This is the website UI code for the dCloud Cisco Webex Contact Center Toolbox.

## Installation
```sh
git clone https://gitlab.com/dcloud-collab/pcce-12-0-toolbox-ui.git
cd pcce-12-0-toolbox-ui
npm install
```

## Build/Run in Development
```sh
npm run dev
```

## Build/Run in Production
Copy files to your www/html folder (or wherever you have your web server pointing to).
```sh
npm run build
cp pcce-12-0-toolbox-ui/dist/* /var/www/html/
```
