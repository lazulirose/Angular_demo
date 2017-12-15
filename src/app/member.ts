export class Member {
		id: number;
		name: string;
		prof: string;
		

    static members: Member[] = [
        { id: 1, name: "バッハ", prof: "外回りが好き、事務処理は苦手" },
        { id: 2, name: "ヘンデル" , prof: "会計士の資格あり、ただし平日の作業は無理" },
        { id: 3, name: "ビバルディ" , prof: "文書作成が得意、細かい数字はダメ" },
        { id: 4, name: "メンデルスゾーン", prof: "交友関係が広い、新人を紹介できるかも"  },
        { id: 5, name: "ハイドン" , prof: "今年は子供が受験なので大役は無理" },
        { id: 6, name: "ヴェルディ" , prof: "しょっ中は来れません、自宅での作業ならOK" },
        { id: 7, name: "ロッシーニ" , prof: "学生なのでわりとスケジュールがゆるいがテスト期間は動けない" },
        { id: 8, name: "モーツァルト" , prof: "なにができるというわけでもないがやる気はあります" },
        { id: 9, name: "チャイコフスキー" , prof: "English OK" },
    ];

}