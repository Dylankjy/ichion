const puppeteer = require('puppeteer')
const path = require('path')
const { getAudioDurationInSeconds } = require('get-audio-duration')


const play = (filePath) => {
    return new Promise(async (resolve, reject) => {
        // Resolve file path into absolute path
        filePath = path.join(__dirname, filePath)

        // Get audio duration
        let lengthOfAudio
        try {
            lengthOfAudio = await getAudioDurationInSeconds(filePath)
        } catch (e) {
            reject(new Error('Invalid path or corrupted audio file.'))
        }

        // Launch puppeteer
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(filePath)

        // Wait for audio to play completely and then close the browser
        waitForAudio(lengthOfAudio * 1000).then(() => {
            browser.close()
            return resolve()
        })
    })
}

const waitForAudio = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

module.exports = {
    play
}
