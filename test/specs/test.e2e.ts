import { expect, browser, $ } from '@wdio/globals'

describe('My Vue Application', () => {
    it('should open correctly', async () => {
        await browser.url(`/`)
        await expect($('aria/✨ DecentralSpark')).toBePresent()
    })

    it('should fail with no input', async () => {
        await browser.url('/login')
        await $('form').$('aria/Login').click()
        // await $('button=Login').click()
        // await $('.btn.btn-primary').click()
        await expect($('div=Invalid login credentials')).toBePresent()
        await browser.pause(10000)
    })
})

