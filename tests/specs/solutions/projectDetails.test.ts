import { $, $$, browser, expect } from '@wdio/globals'

describe('Forge 4 Application', () => {
    it('should load dashboard successfully with 8 cards', async () => {
      // go to home page  
      await browser.url('/')
      // check for title
        await expect($('aria/✨ DecentralSpark')).toBePresent()
        // check for 8 cards
        await expect($$('.card')).toBeElementsArrayOfSize(8)
    })

    describe('project details', () => {
        it('should allow to open a project', async () => {
          // go to home page  
          await browser.url('/')
          // wait for cards to load
            await $('.card').waitForExist()
            // get title of first card
            const projectTitle = await $$('.card')[0].$('h2').getText()
            // click on first card
            await $$('.card')[0].$('aria/More details!').click()
            // check if title is present
            await expect($(`h3=${projectTitle}`)).toBePresent()
        })

        it('should allow to fund a project', async () => {
          // navigate to one project
          await browser.url('/projects/abd1482b-9e32-44a8-b5ef-06f40e121ca8')  
          // click on fund this project
          await $('aria/Fund this Project').click()
          // set value to 100
            await $('form input').setValue(100)
            // click on fund button
            await $('aria/Pledge Now').click()
            // check if thanks message is present
            await expect($('aria/Thanks for pledging!')).toBePresent()
        })
    })
})