module.exports.config = {
	name: "donate",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Văn Huy",
	description: "Donate Cho Admin",
	commandCategory: "Donate Cho Admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★Bạn có thể donate cho Admin Qua\nMomo:0338520780\nThẻ siêu rẻ: 0338520780\nXin cảm ơn bạn đã donate`, event.threadID, event.messageID);