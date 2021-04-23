const defaultConfig = {
	"window-size": {
		width: 1100,
		height: 550,
	},
	url: "https://music.youtube.com",
	options: {
		tray: false,
		appVisible: true,
		autoUpdates: true,
		hideMenu: false,
		startAtLogin: false,
		disableHardwareAcceleration: false,
		restartOnConfigChanges: false,
		trayClickPlayPause: false,
		autoResetAppCache: false,
		resumeOnStart: true,
		proxy: "",
	},
	plugins: {
		// Enabled plugins
		navigation: {
			enabled: true,
		},
		adblocker: {
			enabled: true,
			cache: true,
			additionalBlockLists: [], // Additional list of filters, e.g "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt"
		},
		// Disabled plugins
		shortcuts: {
			enabled: false,
		},
		downloader: {
			enabled: false,
			ffmpegArgs: [], // e.g. ["-b:a", "192k"] for an audio bitrate of 192kb/s
			downloadFolder: undefined, // Custom download folder (absolute path)
		},
		discord: {
			enabled: false,
			activityTimoutEnabled: true, // if enabled, the discord rich presence gets cleared when music paused after the time specified below
			activityTimoutTime: 10 * 60 * 1000 // 10 minutes
		},
		notifications: {
			enabled: false,
			unpauseNotification: false,
			urgency: "normal", //has effect only on Linux 
			interactive: false //has effect only on Windows
		}
	},
};

module.exports = defaultConfig;
