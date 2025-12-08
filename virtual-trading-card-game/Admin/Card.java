package Admin;

public abstract class Card {
	private String CardID;
	private String Name;
	private int RedStat;
	private int BlueStat;
	private int GreenStat;
	private String Rarity;
	private String Weakness;
	private String Strength;
	private String Type;
	
	public void setName(String name){
		this.Name = name;
	}

	public void setCardID(String CardID){
		this.CardID = CardID;
	}

	public void setRedStat(int RedStat){
		this.RedStat = RedStat;
	}

	public void setBlueStat(int BlueStat){
		this.BlueStat = BlueStat;
	}

	public void setGreenStat(int GreenStat){
		this.GreenStat = GreenStat;
	}

	public void setRarity(String Rarity){
		this.Rarity = Rarity;
	}

	public void setWeakness(String Weakness){
		this.Weakness = Weakness;
	}
	public void setStrength(String Strength){
		this.Strength = Strength;
	}
	public void setType(String Type){
		this.Type = Type;
	}

	public void displayProps(){
		System.out.println("Name" + Name);
		System.out.println("RedStat" + RedStat);
		System.out.println("BlueStat" + BlueStat);
		System.out.println("GreenStat" + GreenStat);
		System.out.println("Rarity" + Rarity);
		System.out.println("Weakness" + Weakness);
		System.out.println("Strength" + Strength);
		System.out.println("Type" + Type);

	}
}
