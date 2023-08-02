module.exports = {
    name:"tekme",
    code:`
    $description[1;<@$authorID> Kullanıcısı <@$mentioned[1]> kullanıcısına tekme attı!]
    $image[$jsonRequest[https://elixirapi.xyz/randomGif?filtre=tekme;gifUrl]]
    $onlyIf[$mentioned[1]!=$authorID;Kendine Tekme Atamazsın!!]
    $onlyIf[$mentioned[1]!=undefined;Bir kullanıcı Belirt!]
    
    `}
