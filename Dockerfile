FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ravindu01manoj/SewBotRaviya /root/QueenSew
WORKDIR /root/QueenSew/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
