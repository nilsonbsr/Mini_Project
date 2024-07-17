const wordToEmojiMap = {
    "VPN": "P",
    "Dictator": "💩"
};

export function replaceWordsWithEmojis(message) {
    const words = message.split(" ");
    const updatedWords = words.map(word => wordToEmojiMap[word.toLowerCase()] || word);
    return updatedWords.join(" ");
}