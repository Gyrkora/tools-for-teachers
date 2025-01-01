import DOMPurify from 'dompurify';

export const sanitizeAndParseJSON = (data) => {
    const sanitizedData = DOMPurify.sanitize(data);
    const parsedData = JSON.parse(sanitizedData);

    if (!Array.isArray(parsedData)) {
        throw new Error('El contenido debe ser un array de preguntas.');
    }

    parsedData.forEach((item, index) => {
        if (
            typeof item.question !== 'string' ||
            !Array.isArray(item.options) ||
            typeof item.correct !== 'number' ||
            item.options.length === 0 ||
            item.correct < 0 ||
            item.correct >= item.options.length
        ) {
            throw new Error(`La pregunta en el índice ${index} no es válida.`);
        }
    });

    return parsedData;
};
