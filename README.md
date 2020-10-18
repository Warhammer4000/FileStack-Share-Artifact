# Filestack Share Artifact

This uploads a file to Filestack and outputs the download link.

## Usage

See [action.yml](action.yml)

### Setup

Save the File Stack API KEY as `FILESTACK_API` on your repository Secrets.


## Inputs

### `API_KEY`

**Required** API Key for FileStack API.

### `FILE_PATH`

**Required** Path of the file to be uploaded.

## Outputs

### `File_LINK`
Download link will be saved here


### Upload a file

```yaml
  - name: Share File Via FileStack
        uses: Warhammer4000/FileStack-Share-Artifact@main # This is the action
        id: filestack # This is needed to get the output in a different action.
        with:
              API_KEY: ${{secrets.FILESTACK_API}}
              FILE_PATH: Checkout.text
      - name: Get the output url
        run: echo "Download Link is:${{ steps.filestack.outputs.File_LINK}}"    
```
