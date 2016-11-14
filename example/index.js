import boing from '../index';

console.log('yoyoyoooo', boing);

export const fetchSmartFolder = createAction(
  FETCHED_SMART_FOLDER,
  async id =>
    normalizeSmartFolderApiResponse(
        await http.get(`${SMART_FOLDERS_API_URL}/${id}?without_tests=true`, true)
    )
);

