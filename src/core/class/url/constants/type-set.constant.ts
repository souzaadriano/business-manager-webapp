const imageTypeSet = new Set<string>(['jpg', 'jpeg', 'png', 'svg', 'img']);
const sheetTypeSet = new Set<string>(['csv', 'xls', 'xlsx', 'ods']);
const documentTypeSet = new Set<string>(['docx', 'odt', 'pdf', 'txt']);
const dataTypeSet = new Set<string>(['json', 'yml', 'yaml', 'xml', 'bmd']);

export const TYPE_SET = {
  document: documentTypeSet,
  image: imageTypeSet,
  sheet: sheetTypeSet,
  data: dataTypeSet,
};
