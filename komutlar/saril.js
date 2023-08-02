module.exports = {
    name:"sarıl",
    code:`
    $description[1;<@$authorID> Kullanıcısı <@$mentioned[1]> kullanıcısına sarıldı!]
    $image[$jsonRequest[https://elixirapi.xyz/randomGif?filtre=saril;gifUrl]]
    $onlyIf[$mentioned[1]!=$authorID;Kendine Sarılamazsın!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı Belirt!]
    
    `}
