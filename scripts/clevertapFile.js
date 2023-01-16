define(['clevertap'], function (clevertap) {
  clevertap.init("<your account id>", "account region") // account Id and region are available in clevertap dashboard under settings
  // clevertap.init("222-BRKR-3939", "sk1")
  clevertap.event.push("React Web Test")
})