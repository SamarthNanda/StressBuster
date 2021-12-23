const songs = [
    {
        id:1,
        image: "https://theportsidepub.com/wp-content/uploads/2019/08/1411144497-tv-reviews-friends-blog-redonline.co_.uk__square.jpg",
        name: "Friends",
        link: "https://www.youtube.com/watch?v=q-9kPks0IfE"
    },
    {
        id:2,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto",
        link: "https://www.youtube.com/watch?v=9HSRJSvDOa8&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4"
    }
    ,
    {
        id:3,
        image: "https://pbs.twimg.com/profile_images/474622874846625792/0nvAEwYK_400x400.jpeg",
        name: "That 70's Show",
        link: "https://www.youtube.com/watch?v=Uply9BUShPw"
    },
    {
        id: 4,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto OP1",
        link: "https://www.youtube.com/watch?v=oJwMiU3RJmA&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=3"
    },
    {
        id: 5,
        image: "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
        name: "AOT 1",
        link: "https://youtu.be/8OkpRK2_gVs"
    },
    {
        id: 6,
        image: "https://cdn.myanimelist.net/images/anime/4/84177.jpg",
        name: "AOT 2",
        link: "https://youtu.be/LKP-vZvjbh8"
    },
    {
        id: 7,
        image: "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
        name: "AOT 3",
        link: "https://youtu.be/Znzeeo64yiM"
    },
    {
        id: 8,
        image: "https://m.media-amazon.com/images/I/71R0YI6zRRL._AC_SL1500_.jpg",
        name: "AOT 4",
        link: "https://youtu.be/rwCJvSKzQkc"
    },
    {
        id: 9,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto OP3",
        link: "https://www.youtube.com/watch?v=USn19iuBJv0&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=16"
    },
    {
        id: 10,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto Final Intro",
        link: "https://www.youtube.com/watch?v=OH3GIX8xbpM&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=18"
    },
    {
        id: 11,
        image: "https://data1.ibtimes.co.in/en/full/528838/game-thrones.jpg",
        name: "Game Of Thrones",
        link: "https://www.youtube.com/watch?v=TZE9gVF1QbA"
    },
    {
        id: 12,
        image: "https://i.kym-cdn.com/entries/icons/facebook/000/008/819/himym.jpg",
        name: "HIMYM ALL Intro",
        link: "https://www.youtube.com/watch?v=8lguc5Ota4U"
    },
    {
        id: 13,
        image: "https://pyxis.nymag.com/v1/imgs/be1/f9f/58398f944ae34fa58bfde5f0331fc0b9de-10-b99-ranking.rsquare.w1200.jpg",
        name: "Broklyn NINE NINE",
        link: "https://www.youtube.com/watch?v=-6Up7CG5d6M"
    },
    {
        id: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yQrusDdJfazqCpjATyzwRpl32n5KchjY1A&usqp=CAU",
        name: "Haikyu FlyHigh",
        link: "https://www.youtube.com/watch?v=VKviyEGvb94"
    },
    {
        id: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yQrusDdJfazqCpjATyzwRpl32n5KchjY1A&usqp=CAU",
        name: "Haikyu Outro",
        link: "https://www.youtube.com/watch?v=c3iaOY4adG4"
    },
    {
        id: 16,
        image: "https://www.denofgeek.com/wp-content/uploads/2020/03/the-office-nbc.png?fit=1250%2C704",
        name: "The Office",
        link: "https://www.youtube.com/watch?v=LrBi4rX3TKg"
    },
    {
        id: 17,
        image: "https://c-cl.cdn.smule.com/rs-s84/arr/5b/f1/9c6bb027-e972-4de5-9464-aa5da8576b2e_1024.jpg",
        name: "Scranton the Electric City",
        link: "https://youtu.be/cS9qCre_sv8"
    },
    {
        id: 18,
        image: "https://flxt.tmsimg.com/assets/p185554_b_v10_az.jpg",
        name: "Big Bang Theroy",
        link: "https://youtu.be/kCHGDRHZ4eU"
    },
    {
        id: 19,
        image: "https://flxt.tmsimg.com/assets/p185554_b_v10_az.jpg",
        name: "BBT Full Intro",
        link: "https://youtu.be/x6H7k3XBlk4"
    },
    {
        id: 20,
        image: "https://1.bp.blogspot.com/-nJxwIXPHXnc/YJyQMy2vLgI/AAAAAAAABBg/EnKNgz1t-QILoj8frteMx3QcoWX0uKUYwCPcBGAYYCw/s518/643596-v.jpg",
        name: "Shinchan",
        link: "https://youtu.be/dUXLq8ZQYXo"
    },
    {
        id: 21,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png",
        name: "Demon Slayer 1",
        link: "https://youtu.be/jiJu4K2jems"
    },
    {
        id: 22,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png",
        name: "Demon Slayer 2",
        link: "https://youtu.be/0MPq9QGUBa4"
    },
    {
        id: 23,
        image: "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        name: "MHA all",
        link: "https://youtu.be/Ov1yvlD1Wgk"
    },
    {
        id: 24,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto Asuma",
        link: "https://www.youtube.com/watch?v=DyCxq-E1Td8&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=4"
    },
    {
        id: 25,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto Jiraya",
        link: "https://www.youtube.com/watch?v=qvHftG-7Atc&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=6"
    },
    {
        id: 26,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto OP2",
        link: "https://www.youtube.com/watch?v=1qPz3xlT7r8&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=11"
    },
    {
        id: 27,
        image: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1866738/original/crop:x0y0w500h566/hash:1467219937/1395071440_Relax_Naruto.jpg?1467219937",
        name: "Naruto Madara",
        link: "https://www.youtube.com/watch?v=dJfC3StLEuQ&list=PLLDrsbRj5c9GD4qVMgFS1m1LKuaREhKS4&index=13"
    },
    {
        id: 28,
        image: "https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2011/09/19/Style/Images/Men_curtainFINAL.jpg?uuid=59tp2uL2EeCKBcEOwQfcZg",
        name: "Two and a half men",
        link: "https://youtu.be/zJV_STpyiTE"
    }
]

export default songs;