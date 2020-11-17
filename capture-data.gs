function doPost(e) {
  const columnsDetails = {
    id: {
      letter: 'a',
      pattern: /\w+/,
      defaultVal: 'unknown'
    },
    'E-mail': {
      letter: 'b',
      pattern: /.+@.+/,
      defaultVal: 'unknown'
    },
    'Visitou LP': {
      letter: 'c',
      pattern: /\d/,
      defaultVal: 0
    },
    'Passo 2': {
      letter: 'd',
      pattern: /\d/,
      defaultVal: 0
    },
    Converteu: {
      letter: 'e',
      pattern: /\d/,
      defaultVal: 0
    },
    'Qtde Campos Passo 2': {
      letter: 'f',
      pattern: /\d+/,
      defaultVal: 0
    },
    Mobile: {
      letter: 'g',
      pattern: /\d/,
      defaultVal: 0
    },
    Medium: {
      letter: 'h',
      pattern: /\w+/,
      defaultVal: 'unknown'
    },
    Campos: {
      letter: 'i',
      pattern: /\w+/,
      defaultVal: ''
    }
  };

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const content = (e && e.postData && e.postData.contents) || '';
  const data = jsonParse(content, {});
  const row = getRowDetails(data.id);

  for (let field in columnsDetails) {
    const column = columnsDetails[field];
    const cell = column.letter + row.num;
    const fieldValue = data[field];

    if (!fieldValue && row.type === 'insert') {
      sheet.getRange(cell).setValue(column.defaultVal);
    } else if (fieldValue && column.pattern.test(fieldValue)) {
      sheet.getRange(cell).setValue(fieldValue);
    }
  }

  function jsonParse(value, fallback) {
    try {
      return JSON.parse(value);
    } catch (_) {
      return fallback;
    }
  }

  function getRowDetails(id) {
    const values = sheet.getDataRange().getValues();
    const length = values.length;

    for (var i = length - 1; i >= 0; i--) {
      if (values[i][0] === id) {
        return {
          num: i + 1,
          type: 'update'
        };
      }
    }

    return {
      num: length + 1,
      type: 'insert'
    };
  }
}