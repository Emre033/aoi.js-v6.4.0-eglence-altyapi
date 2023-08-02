module.exports = {
    name:"op",
    code:`
    $description[1;<@$authorID> Kullanıcısı <@$mentioned[1]> kullanıcısına optu!]
    $image[$jsonRequest[https://elixirapi.xyz/randomGif?filtre=öp;gifUrl]]
    $onlyIf[$mentioned[1]!=$authorID;Kendini opemezsin!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı Belirt!]
    
    `
    }
