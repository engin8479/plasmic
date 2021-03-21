client.on('message', async msg => {
      if(msg.channel.id === "kanal idi") {
        if(msg.content.includes("kabul ediyorum")){
          msg.member.roles.add("rolid")
        }
      }
        else return;
      });
