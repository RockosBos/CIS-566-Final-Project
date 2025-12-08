package Admin;

import java.util.Scanner;

public class CardCreatorCustom extends CardCreator{

	private Scanner scanner = new Scanner(System.in);
	String input;
	int intInput;
	CardCustom cardCustom = new CardCustom();

	CardCreatorCustom(){

		System.out.println("Please Enter the Card Name:");
		input = scanner.nextLine();
		cardCustom.setName(input);
		System.out.println("Please Enter the Card Red Stat:");
		intInput = scanner.nextInt();
		cardCustom.setRedStat(intInput);
		System.out.println("Please Enter the Card Blue Stat:");
		intInput = scanner.nextInt();
		cardCustom.setBlueStat(intInput);
		System.out.println("Please Enter the Card Green Stat:");
		intInput = scanner.nextInt();
		cardCustom.setGreenStat(intInput);
		System.out.println("Please Enter the Rarity:");
		input = scanner.nextLine();

		input = scanner.nextLine();
		cardCustom.setRarity(input);
		System.out.println("Please Enter the Card Weakness:");
		input = scanner.nextLine();
		cardCustom.setWeakness(input);
		System.out.println("Please Enter the Card Strength:");
		input = scanner.nextLine();
		cardCustom.setStrength(input);
		System.out.println("Please Enter the Card Type:");
		input = scanner.nextLine();
		cardCustom.setType(input);
		cardCustom.displayProps();
	}
}
