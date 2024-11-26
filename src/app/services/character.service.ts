import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: Character[] = [
    { id: 1, name: 'Tanjiro Kamado', category: 'Demon Slayer', imageUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=812,h=457,fit=crop/AR0b5XDqBBFnQQRV/tanjiro-1-A8544Z4BGZCy1nav.jpg' },
    { id: 2, name: 'Nezuko Kamado', category: 'Demon Slayer', imageUrl: 'https://www.nautiljon.com/images/perso/00/69/kamado_nezuko_18296.webp' },
    { id: 3, name: 'Zenitsu Agatsuma', category: 'Demon Slayer', imageUrl: 'https://www.otaku-discount.com/modules/smartblog/images/56-large_default.jpg' },
    { id: 4, name: 'Inosuke Hashibira', category: 'Demon Slayer', imageUrl: 'https://boo-prod.b-cdn.net/database/profiles/1691800851372ac336ac9d30d6e571f7c1a1de062b982.PNG' },
    { id: 5, name: 'Giyu Tomioka', category: 'Hashira', imageUrl: 'https://www.nautiljon.com/images/perso/00/79/tomioka_giyu_18297.webp' },
    { id: 6, name: 'Akaza', category: 'Demon', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nj_3oecHHaXv6vmOGBtzkJSBUbYahBG-Zw&s' },
    { id: 7, name: 'Kokushibo', category: 'Demon', imageUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/demon-slayer-kokushibo.jpg' },
    { id: 8, name: 'Nezuko Kamado', category: 'Demon', imageUrl: 'https://figurinepop.com/public/2023/10/nezukokamadodemon1_1.jpg' },
    { id: 9, name: 'Muzan Kibutsuji', category: 'Demon', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRsgUfNSB6_lyH9RlfrI8gmnLEr6K5-KDXA&s' },
    { id: 10, name: 'Sanemi Shinazugawa', category: 'Hashira', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUlQHxDXnFMQ2dP5XNXtRfUWYpZYb4CgnMg&s' },
    { id: 11, name: 'Muichiro Tokito', category: 'Hashira', imageUrl: 'https://manga-imperial.fr/cdn/shop/articles/muichiro_4106ca91-3bfd-4b9c-92c1-638990bcef61_600x.jpg?v=1671886257' },
    { id: 12, name: 'Shinobu Kochô', category: 'Hashira', imageUrl: 'https://www.nautiljon.com/images/perso/00/04/kocho_shinobu_18440.webp' },
    { id: 13, name: 'Kyôjurô Rengoku', category: 'Hashira', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Iet9PHjELNLrExTKcRuTXGQwUZtxdV3CRQ&s' },
    { id: 14, name: 'Kanao Tsuyuri', category: 'Demon Slayer', imageUrl: 'https://www.nautiljon.com/images/perso/00/09/tsuyuri_kanao_18490.webp' },
    { id: 15, name: 'Mitsuri Kanroji', category: 'Hashira', imageUrl: 'https://boutique-manga.fr/wp-content/uploads/2024/03/What-will-Demon-Slayer-Season-4-be-about-3.webp' },
    { id: 16, name: 'Obanai Iguro', category: 'Hashira', imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/obanai-iguro-face-night-edit.jpg' },
    { id: 17, name: 'Genya Shinazugawa', category: 'Demon Slayer', imageUrl: 'https://boutique-manga.fr/wp-content/uploads/2024/03/Genya-2-Cropped-66e99e2-1-595x397.jpg' },
    { id: 18, name: 'Genya Shinazugawa', category: 'Demon', imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/genya-gun.jpg' },
    { id: 19, name: 'Gyomei himejima', category: 'Hashira', imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/gyomei-himejima-the-demon-slayer-corps.jpg' },
    { id: 20, name: 'Tengen Uzui', category: 'Hashira', imageUrl: 'https://www.jeuxactu.com/datas/jeux/d/e/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles/vn/demon-slayer-kimetsu-no-y-62d6ec95f174e.jpg' },
    { id: 21, name: 'Kanae Kochô', category: 'Demon Slayer', imageUrl: 'https://www.nautiljon.com/images/perso/00/86/kocho_kanae_18568.webp' },

      // ADD MORE IF YOU WANT //

  ];

  getCharactersByCategory(category: string): Character[] {
    return this.characters.filter((character) => character.category === category);
  }

  getAllCategories(): string[] {
    return [...new Set(this.characters.map((character) => character.category))];
  }
}
