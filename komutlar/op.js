module.exports = {
    name:"tokat",
    code:`
    $description[1;<@$authorID> Kullanıcısı <@$mentioned[1]> kullanıcısına tokat attı!]
    $image[$jsonRequest[https://elixirapi.xyz/randomGif?filtre=öp;gifUrl]]
    $onlyIf[$mentioned[1]!=$authorID;Kendine Tokat Atamazsin!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı Belirt!]
    
    `
    }
