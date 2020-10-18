# Filestack Share Artifact

This uploads a file to Filestack and outputs the download link.

## Usage

See [action.yml](action.yml)

### Setup

Save the token as `FILESTACK_API` on your repository Secrets.

### Upload a file

```yaml
 - name: Share File Via FileStack
   uses: Warhammer4000/FileStack-Share-Artifact@main # This is the action
   id: filestack
        with:
          API_KEY: ${{secrets.FILESTACK_API}}
          FILE_PATH: Checkout.text
- name: Get the output url
    run: echo "Download Link is: ${{ steps.filestack.File_LINK.time }}"        
```
