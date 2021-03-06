const Command = require("../../structures/Command"),
    Constants = require("../../utility/Constants");

module.exports = class extends Command {
    constructor(...args) {
        super(
            {
                aliases: ["dice"],
                userPermissionLevel: Constants.PermissionsLevels.SERVER_MEMBER,
                guildOnly: false
            },
            ...args
        );
    }

    async execute(message) {
        const isHeads = Math.random() > 0.5;
        isHeads
            ? message.sendT("fun/flip:HEADS")
            : message.sendT("fun/flip:TAILS");
    }
};
