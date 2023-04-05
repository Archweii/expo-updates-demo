# Create new Expo app
https://docs.expo.dev/get-started/create-a-new-app/

# Setitng up EAS Build
https://docs.expo.dev/build/setup/

# Upgrading to Yarn v3
https://yarnpkg.com/getting-started/migration

# Gitignore for Yarn V3
https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

# Github Actions - Setup Expo Updates
https://github.com/expo/expo-github-action

# Create Expo Token for GH Action
https://expo.dev/accounts/%5Baccount%5D/settings/access-tokens

# Triggers - On Release
https://docs.github.com/en/webhooks-and-events/webhooks/webhook-events-and-payloads#release


# Installation / Setup instructions

## Setup Expo acces to GiHub repo
> You need to add the EXPO_TOKEN GiHub env variable with the token provided from the following site
- https://expo.dev/accounts/%5Baccount%5D/settings/access-tokens
- If you are interested you have more details here https://github.com/expo/expo-github-action

## Create Environments
> The environments will be used to define the EAS Channels available.

- In GitHub navigate to your repo's Settings > Environments
- Create at least 2 'production' & 'staging', they have to match the channels used in the eas.json > build > _NAME_ > channel field
