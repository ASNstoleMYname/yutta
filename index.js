const discord = require('discord.js');
const bot = new discord.Client;
const settings = require('./settings.json');
const prefix = '=';
//-----------------------------------------------------------------------
var argsPos = 0;
var i = 0;
var text = new Array('');
var args;
var tPrefix =  '~';
var gPrefix ;
var x = 0;
var voteG = new Array('');
var voteEmbed;
var embedColor = 8210404;
var arrLength;
var h = 0;
var poles = new Array('1');
var brLongStrongThin = '~~------------------------------------------------------------------------------------------------~~';
var brLongStrongExtraTHICC = '**~~===========================================================~~**';
var brShortWeakThin = '----------------------------';
var brShortstronThin = '~~----------------------------~~';
var vYes = 0;
var vNo = 0;
var vNut = 0;
var Votes = 0;
var serverId = null;
var channelId = null;
var Id = null;
var hg='';
var s;
var pPos;
var watchDog;
var place;
var polesNoActivePoleWarning = 'there is not active pole now';
var cheking ;
//-------------------------------------------------------------------------------------------
function getInput(startPrefix,saver,endPrefix) {
    console.log('-----------------')
    if(startPrefix === undefined){
        console.log('this should come out once');
        argsPos++;
        return saver[x] = args[argsPos - 1];
    }else{
        console.log(args[argsPos]);
        if(args[argsPos] === startPrefix){
            i++;
            argsPos++;
            while(i < 2){
                if(args[argsPos] === endPrefix){
                    i++;
                    argsPos++;
                }else{
                    saver[x] = args[argsPos];
                    x++;
                    argsPos++;
                }
            }
        }
        i =0;
        x =0;
        return saver;
    }
};
function hardReset(){
    watchDog = false;
    argsPos = 0;
    i = 0;
    x = 0;
    arrayClear(text);
};
function arrayClear(funcArray){
    var m = 0;
    arrLength = funcArray.length;
    while(m < arrLength) {
        funcArray.pop();
        m += 1;
    }
};

//------------------------------------------------------------
bot.on('ready',() => {
    console.log('online');
});
 //----------------------------------------------------------------------------------
bot.on('message', message =>{
    function getCode(){
        Id = null;
        Id = message.channel.id;
        // Id = channelId;
        return Id;
    };
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(prefix)) return;

    args = message.content.substring(prefix.length).split(' ');
    var command = args.shift().toLowerCase();
    //----------------------------------------------------------------------------------------
    function checkDouble(cheking){
        //cheking = getCode();
        console.log("dit was hier");
        for(var i = 0;i < poles.length;i++){
        console.log("h:"+poles[i]. Id);
         if(cheking === poles[i].Id){
            console.log("not good:"+poles[i].getId);
            console.log("detected");
            message.channel.send("there already is an vote here");
            watchDog = true;

        }else{
            console.log("---"+i+":"+poles[i].Id);
            var thingy = getCode();
            console.log("===:" + thingy);
            console.log("function watchDog:"+watchDog);
        }
    }
}
        //------------------------------------------------------------------------------------------
    class voteDefiner{
        constructor(goal,paragraph){
            this.goal = getInput(gPrefix,goal,gPrefix);
            // this.embed = embed;
            this.paragraph = getInput(tPrefix,paragraph,tPrefix);
            this.paragraphText = this.paragraph.join(' ');
            this.Id = message.channel.id;
            this.place = poles[poles.length];
            this.vYes = 0;
            this.vNo = 0;
            this.vNut = 0;
            this.Votes = 0;
        };
        greate(){
            if(this.paragraphText.length < 3){
                //this.paragraphText = 'you made an error ,is this person dumb?';
                message.channel.sendMessage("you made an error");
                return;
            }
            this.voteEmbed =  {
                "title": "vote",
                "description": "**" + this.paragraphText + "**",
                "color":embedColor,
                "fields": [
                    {
                        "name":':',
                        "value":brLongStrongThin
                    },
                    {
                        "name":":regional_indicator_y: :regional_indicator_e: :regional_indicator_s: ",
                        "value":" *=f1*",
                        "inline": true
                    },
                    {
                        "name":":regional_indicator_n: :regional_indicator_o:",
                        "value":" *=f2*",
                        "inline": true
                    },
                    {
                        "name":":yin_yang: ",
                        "value":"*=f3*",
                        "inline": true
                    },
                    {
                        "name":this.vYes,
                        "value":brShortstronThin,
                        "inline": true
                    },                    {
                        "name":this.vNo,
                        "value":brShortstronThin,
                        "inline": true
                    },                    {
                        "name":this.vNut,
                        "value":brShortstronThin,
                        "inline": true
                    },
                    {
                      "name": ":bar_chart: "+ Votes + "/" + this.goal,
                      "value": brShortWeakThin
                    },
                  ]
            };
            return this;
        };
        update(){
            this.voteEmbed =  {
                "title": "vote",
                "description": "**" + this.paragraphText + "**",
                "color":embedColor,
                "fields": [
                    {
                        "name":':',
                        "value":brLongStrongThin
                    },
                    {
                        "name":":regional_indicator_y: :regional_indicator_e: :regional_indicator_s: ",
                        "value":" *=f1*",
                        "inline": true
                    },
                    {
                        "name":":regional_indicator_n: :regional_indicator_o:",
                        "value":" *=f2*",
                        "inline": true
                    },
                    {
                        "name":":yin_yang: ",
                        "value":"*=f3*",
                        "inline": true
                    },
                    {
                        "name":this.vYes,
                        "value":brShortstronThin,
                        "inline": true
                    },                    {
                        "name":this.vNo,
                        "value":brShortstronThin,
                        "inline": true
                    },                    {
                        "name":this.vNut,
                        "value":brShortstronThin,
                        "inline": true
                    },
                    {
                      "name": ":bar_chart: "+ this.Votes + "/" + this.goal,
                      "value": brShortWeakThin
                    },
                  ]
            };
            return this;
        };
        Send(){
            message.channel.send({embed:this.voteEmbed});
            return this;
        };
        makeId(){
            this.Id = getCode();
            return this;

        };
        getId(){
            return this.Id;
        };
        plusVyes(){
            this.vYes++;
            return this;
        };
        plusVno(){
            this.vNo++;
            return this;
        };
        plusVnut(){
            this.vNut++;
            return this;
        };
        plusvote(){
            this.Votes++;
            return this;

        }
        checkComplete(){
            if(this.goal == this.Votes){
                console.log("---100%---");
                
            }else{
                console.log("---!100%---" + this.goal+"/"+this.Votes);
            };
            return this;
        };
    };
    //----------------------------------------------------------------------------------
    if (command === 'vote') {
        hardReset();
        message.channel.send(message.channel.id);
        checkDouble(getCode());
        console.log("watchDog:"+watchDog);
        if(watchDog === true) return;
        poles.push(new voteDefiner(voteG,text));
        poles[poles.length - 1].greate().Send().makeId().getId();
        console.log("vote is made");
    }
//----------------------------------------------------------------------------------------------------
    else{
        if(command === 'f1'){
            hardReset();
            if(poles.length === 1){
                message.channel.sendMessage(polesNoActivePoleWarning);

            }else{
            //zoekt active polles
            s = null;
            s = 1;
            watchDog = true;
            try{
            for(i =0;i < poles.length;i++){
                pPos = poles.length - s;
                if(getCode() === poles[pPos].getId()){
                    watchDog = false;
                    poles[pPos].plusVyes().plusvote().update().Send().checkComplete();
                    console.log("voted plus 1");
                    return;
                }
                s++;
            }
        }
        catch{
            message.channel.sendMessage(polesNoActivePoleWarning);
            console.log("warnig send");
    }
        };
        }
//---------------------------------------------------------------------------------------------------------------
        else{
            if(command === 'f2'){
                hardReset();
                if(poles.length === 1){
                    message.channel.sendMessage(polesNoActivePoleWarning);

                }else{
                //zoekt active polles
                s = null;
                s = 1;
                watchDog = true;
                try{
                for(i =0;i < poles.length;i++){
                    pPos = poles.length - s;
                    if(getCode() === poles[pPos].getId()){
                        watchDog = false;
                        poles[pPos].plusVno().plusvote().update().Send();
                        console.log("voted minus 1");
                        return;
                    }
                    s++;
                }
            }
            catch{
                message.channel.sendMessage(polesNoActivePoleWarning);
                console.log("warnig send");
                 }
            };
            }
//---------------------------------------------------------------------------------------------------------
            else{
                if(command === 'f3'){
                    hardReset();
                    if(poles.length === 1){
                        message.channel.sendMessage(polesNoActivePoleWarning);

                    }else{
                    //zoekt active polles
                    s = null;
                    s = 1;
                    watchDog = true;
                    try{
                    for(i =0;i < poles.length;i++){
                        pPos = poles.length - s;
                        if(getCode() === poles[pPos].getId()){
                            watchDog = false;
                            poles[pPos].plusVnut().plusvote().update().Send();
                            console.log("voted plus 1");
                            return;
                        }
                        s++;
                    }
                }
                catch{
                    message.channel.sendMessage(polesNoActivePoleWarning);
                    console.log("warnig send");
            }
                };
                }
//---------------------------------------------------------------------------------------
            }/*if num 3 */
        }/*if num 2 */
    }/* if num 1 */
});
//-------------------------------------------------------------------------------------
bot.login(settings.token);