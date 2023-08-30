import Mailgen from 'mailgen';

interface MailBody {
    productName: string;
    productWebUrl: string;
    receiverName: string;
    confirmLink: string;
}

function genEmailString(mailBody: MailBody) {
    let mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: mailBody.productName,
            link: mailBody.productWebUrl
        }
    });
    
    let email = {
        body: {
            greeting: 'Xin chào',
            signature: 'Chúc bạn một ngày tốt lành',
            name: mailBody.receiverName,
            intro: `Cảm ơn bạn đã tham gia cộng đồng ${mailBody.productName}! Chúng tôi rất vui vì điều đó!`,
            action: {
                instructions: `Để xác thực email cho tài khoản ${mailBody.productName}, vui lòng bấm vào liên kết bên dưới:`,
                button: {
                    color: '#22BC66',
                    text: 'Xác thực email',
                    link: mailBody.confirmLink
                }
            },
            outro: 'Cần giúp hoặc có câu hỏi? Chỉ cần trả lời email này, chúng tôi rất sẵn lòng trợ giúp.'
        }
    };
    
    return mailGenerator.generate(email);
}

export default genEmailString;