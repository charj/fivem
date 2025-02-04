/**
 * [IMPORTANT NOTES!]
 * This config SHOULDN'T BE used directly through client script and not recommended to import it outside the core of Natuna Framework.
 */

module.exports = {
    /**
     * @description
     * Natuna Framework core configuration settings.
     */
    core: {
        /**
         * @description
         * Configure whether if the server was whitelisted or not. Configure the whitelisted user on the database table "whitelisted_list"
         *
         * @example
         * isWhitelisted: true
         */
        isWhitelisted: false,

        /**
         * @description
         * **CHANGE THE TYPE BELOW TO CONFIGURE THE DATABASE**
         * (Currently only MySQL is supported)
         *
         * @variation
         * - MySQL: "mysql" (default)
         * - Cassandra: "cassandra"
         * - MongoDB: "mongodb"
         *
         * @type {"mysql"} (CASE SENSITIVE)
         */
        db: {
            /**
             * Hostname of the SQL Server
             * @example 127.0.0.1
             */
            host: "localhost",
            /**
             * Port of the SQL Server
             * @example 3306
             */
            port: 3306,
            /**
             * Username of the SQL Server
             * @example root
             */
            user: "root",
            /**
             * Password of the SQL Server
             * @example someStrongPassword
             */
            password: "",
            /**
             * Database Name (Make sure you have already installed the database)
             * @example natuna
             */
            database: "natuna",
        },

        /**
         * @description
         * We provide you an encryption to encrypt some sensitive data before putting it on any variable/storage
         */
        crypter: {
            /**
             * Algorithm of the Encrypter (I suggest you not to change it, unless you know what you're doing)
             * @example aes-256-ctr
             */
            algorithm: "aes-256-ctr",
            /**
             * The password to encrypt and decrypt data
             * [IMPORTANT] KEEP IT SECRET, SAVE IT, you don't wanna leak or lose this key. Once it's gone missing, you're done.
             * @example someStrongPassword123
             */
            secretKey: "12345abcdefg",
        },

        /**
         * @description
         * List of players wrapper configuration
         */
        players: {
            /**
             * Set how long the delay between location update of the player to sync with the server
             */
            locationUpdateInterval: 1 * 1000, // 1 second (in Milisecond)
        },

        /**
         * @description
         * Discord App Rich Presence Configuration
         * - Configure your Discord app first on https://discord.com/developers/applications
         * - You can comment or remove a button if not used. Maximum button can be used is 2
         *
         * @variation
         * Available Variables:
         *  - {{PLAYER_NAME}}
         *  - {{TOTAL_ACTIVE_PLAYERS}}
         *
         */
        discordRPC: {
            appId: "1234567890",
            refreshInterval: 30 * 1000, // Determine the time distance between new data
            text: "{{TOTAL_ACTIVE_PLAYERS}} Players!",
            largeImage: {
                assetName: "logo",
                hoverText: "Natuna Framework!",
            },
            smallImage: {
                assetName: "logo2",
                hoverText: "Small Logo Text",
            },
            // The URL to open when clicking the button. This has to start with fivem://connect/ or https://.
            buttons: [
                {
                    label: "Discord Server",
                    url: "https://discord.gg/yourdiscordlink",
                },
                {
                    label: "Start Your Roleplay",
                    url: "fivem://connect/yourserver.com",
                },
            ],
        },

        /**
         * @description
         * NUI Build Options
         */
        nui: {
            /**
             * If set to 'true', then it'd active a 'nuidebug' command which copy all the full parsed HTML for the NUI.
             * If you're wondered how the NUI files looks like at the end, you should try turning this on
             *
             * BE CAREFUL, TURNING THIS ON WILL CAUSED THE FEATURE TO AVAILABLE TO EVERY CLIENT!
             * ONLY TURNING THIS ON WHEN YOU'RE IN DEVELOPMENT!
             *
             * Steps:
             * 1. Turn this setting on
             * 2. Start the server
             * 3. Join the server, and wait until the game finished loading / until you're in the game
             * 4. Execute command '/nuidebug' (The HTML would be pasted to your clipboard)
             * 4. Open any text editor
             * 5. Paste the text
             */
            debug: false,
        },

        /**
         * @description
         * Game options
         */
        game: {
            /**
             * Disable Emergency Service like Police, Ambulance, Firefighters, etc.
             */
            noDispatchService: true,

            /**
             * Disable Wanted Level
             */
            noWantedLevel: true,

            /**
             * Set whether auto respawn is disabled if player dies
             * [IMPORTANT!] This option requires "spawnmanager" script to be activated!
             */
            autoRespawnDisabled: true,

            /**
             * Set pause menu title
             */
            pauseMenuTitle: "My Map Title Name!",
        },
    },

    /**
     * @description
     * You might wanna put your plugin configuration in here.
     */
    plugins: {
        // Example configuration for "example" plugin, check how to use it on the plugin file.
        example: {
            client: {
                // Supported use: string, array, json, number, etc. (As long it's not a function or things that need to be executed).
                someExampleClientConfig: true,
                someExampleSecondClientConfig: [1, 2, 3, 4, 5, 6],
                someExampleThirdClientConfig: {
                    example: true,
                },
            },
            server: {
                someExampleServerConfig: true,
            },
        },
    },
};
