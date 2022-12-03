const puppeteer = require('puppeteer')
const path = require('path')
const { getAudioDurationInSeconds } = require('get-audio-duration')


const main = async (filePath) => {
    // Resolve file path into absolute path
    filePath = path.join(__dirname, filePath)

    // Get audio duration
    const lengthOfAudio = await getAudioDurationInSeconds(filePath)

    // Launch puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(filePath)

    // Wait for audio to play completely and then close the browser
    waitForAudio(lengthOfAudio * 1000).then(() => {
        browser.close()
    })
}

const waitForAudio = (delay) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

module.exports = main
