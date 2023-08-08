import { createClient } from '@supabase/supabase-js'
import { $, browser, expect } from '@wdio/globals'
import { before } from 'node:test'
import input from 'postcss/lib/input'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
})

const email = `user-${Math.floor(Math.random() * 1000000)}@example.com`
const password = 'password'

describe('Forge 4 Application', () => {
    /**
     * create a user
     */
    before(async () => {
        await browser.url('/logout')
        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: { name: 'Yoda' }
        })

        if (error) {
            throw new Error(error.message)
        }
    })

    describe('login', () => {
        it('should fail with no input', async () => {
            // Use Docs https://webdriver.io/docs/api/browser/url
            // go to home page  
            await browser.url('FOO')
            // click login button
            await $('BAR').click()
            // click login button
            await $('form').$('FOO').click()
            // check for error message
            await expect($('BAR')).toBePresent()
        })

        it('should be invalid if username is not an email', async () => {
            // go to login page
            await browser.url('/login')  
            // get email input element
            // set value to invalid email
            // check if input is invalid, use method below
            expect(await browser.execute((elem: HTMLInputElement) => elem.checkValidity(), input)).toBe(false)
        })

        it('email should be valid with valid email', async () => {
            // go to login page
            // get email input element 
            // set value to valid email            
            // assert that input is valid
        })

        it('should fail if credentials are invalid', async () => {
            // go to login page
            // set email to valid email
            // set password to invalid password
            // click login button
            // check for error message
        })

        it('should fail if email is not confirmed', async () => {
            await $('input[type="email"]').setValue(email)
            await $('input[type="password"]').setValue(password)
            await $('form').$('aria/Login').click()
            await expect($('.avatar')).toBePresent()
        })
    })
})