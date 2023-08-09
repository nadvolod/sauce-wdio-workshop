import { createClient } from '@supabase/supabase-js'
import { $, browser, expect } from '@wdio/globals'
import { before } from 'node:test'

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

    describe('non-ui registration', () => {
        it('should be able to login', async () => {
            // go to login page
            // login
            // check for avatar
            await expect($('.avatar')).toBePresent()
        })
    })
})