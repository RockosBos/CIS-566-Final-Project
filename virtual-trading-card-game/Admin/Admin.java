package Admin;

import java.util.Scanner;

public class Admin {;

    public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		String input;
		CardCreatorCustom cardCreatorCustom;

		do{
			System.out.println("Welcome to the Admin CLI for the virtual trading card game!");
			System.out.println("You have the following options:");
			System.out.println("1) Create a new Card");
			System.out.println("2) Generate a random Card");
			System.out.println("9) Close CLI");
			input = scanner.nextLine();

			System.out.println(input);
			switch(input){
				case "1":
					cardCreatorCustom = new CardCreatorCustom();
					break;

				case "9":

					break;

				default:
					System.out.println("You seem to have entered an invalid response, please try again.");
					break;
				
			}
			
		}while(false);
    }
}