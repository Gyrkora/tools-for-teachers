import DOMPurify from 'dompurify';

/**
 * Sanitiza y valida un JSON que contiene preguntas del Quiz.
 * @param {string} data - El JSON en formato string.
 * @returns {Array} - Un array de preguntas sanitizado y validado.
 * @throws {Error} - Si el JSON no es válido o está mal formateado.
 */
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
