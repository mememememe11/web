package com.yedam;

import java.util.Scanner;

public class HEREHEREHERE {
	

	public static void main(String[] args) {
		test8();
	}// main 끝

//		
//		int[] num = new int[5];
//		num[0]= 1;
//		num[1]= 2;
//		num[2]= 3;		
//		num[3]= 4;
//		num[4]= 5;
//		System.out.println(num[0]);
//		
//		int count = num.length;
//		System.out.println(count);

//		int[] num1 = new int[] {10, 20, 30, 40, 50, 60};
//		
//		System.out.println(num1[num1.length-1]);
//		
//		int[] num2 = {50, 60, 70};
//		System.out.println(num2[1]);
//		
//		String[] str = {"사과", "배", "포도"};
//		System.out.println(str[0]);

//		String[] str2 = {"홍길동", "김철수", "김영희안녕"};
//		for (int b=0; b<str2.length; b++) {
//			
//			String name = str2[b];
//			int length = name.length();
//			System.out.println((b+9)+"번 이름 " + name + " 글자수는 "+ length + "글자 입니다");
//		}
	public static void test8() {
		
		
		
		
   
			
		
		
		
		
		
		
		
	} // test8 end
	
	
	
		
		public static void test7() {
		Scanner scn = new Scanner(System.in);
		int balance = 0;// 계좌의 금액
		//조건추가..10만원 초과 x 마이너스 금액x
		
		while(true) {
			System.out.println("1.입금 2.출금 3.잔액 4.종료");
			System.out.println("선택>>");
			int menu = Integer.parseInt(scn.nextLine());
			int money = 0;
		if(menu == 1) {
			System.out.println("입금액을 입력하세요>>");
			money=Integer.parseInt(scn.nextLine());
		if(money+balance > 100000) {
			System.out.println("10만원을 초과할 수 없습니다");
		}
		else  {	
			balance = balance+money;
			System.out.printf("%d원을 입금하였습니다",money);
		}
		} // 여기까지 입금액 입금 첫if문 괄호닫음
		else if (menu==2) {
			System.out.println("출금액을 입력하세요");
			money=Integer.parseInt(scn.nextLine());
		 if (balance < money) {
				System.out.println("잔액 부족");
		 }
		 else {
			 balance = balance - money;
			 System.out.printf("%d원 출금하였습니다",money);
		 }
		}// 여기까지 출금액 출금 첫if문 괄호닫음 
		else if(menu == 3) {
			System.out.printf("현잔액 >> %d원\n", balance);
		}
		else if(menu == 4){
			System.out.println("종료 됩니다");
			break;
		}
			
		}//while end		
		
	
	}// test7 end
	
	
	public static void test6() {
		Scanner scn = new Scanner(System.in);
		int num = (int)(Math.random()*1000)+1;
		int count = 0;
		
		while(true) {
			count++;
			System.out.println("1~1000 사이의 값 입력>>");
			int sum = Integer.parseInt(scn.nextLine());
			
		if (num == sum) {
			System.out.println("정답입니다!!");
			System.out.println("총" + count + "회 시도 하였습니다");
			break;
		}if ( sum < 1 || sum > 1000) {
			System.out.println("1~1000 사이 값만 입력하세요");
		}
		
		else if (num > sum) {
			System.out.println("입력값 보다 더 큽니다");
		}else if (num < sum) {
			System.out.println("입력값 보다 더 작습니다");
		}
			
		
	
		
		}//while 문
//	int score = 90;
//	
//	if(score >= 90) {
//		System.out.println("A학점");
//	}else if (score >= 80) {
//		System.out.println("B학점");
//	}else if (score >= 70) {
//		System.out.println("C학점");
//	}else if (score >= 60) {
//		System.out.println("D학점");
//	}else{
//		System.out.println("불합격");
//	}
//	
//	score = score / 9;
//	switch(score) {
//	case 10:
//	case 9 : 
//		System.out.println("A학점");
//		break;
//	case 8 :
//		System.out.println("B학점");
//		break;
//	case 7 :
//		System.out.println("C학점");
//		break;
//	default:
//		System.out.println("불합격");
//	
//	}
	
	
		
	}// test 6 end
	
	
	
	
	
	
	public static void test5() {
//		System.out.printf("%s %.2f\t","문자",30.3);
		System.out.println();
		
		String str= "안녕하세요 %s 입니다\n";
		str = str + "나이는 %d세입니다.\n";
		str = str + "몸무게는 %.1f입니다.\n";
		
		
		System.out.printf(str,"김동원",20,60.5);
	} 

	public static void test4() {
		// 조건식과 반복문 이용해 친구이름 입력받고
		// 친구 목록을 출력 함 그리고 equals 이용해 종료
		Scanner scn = new Scanner(System.in);
		String str = "친구 목록은";
		boolean isTrue = true;

		while (true) {
			System.out.println("친구이름 >> 종료하려면 end");
			String msg = scn.nextLine();
			if (msg.equals("end")) {
			str = str + "입니다";
				break;

			}
			if (isTrue) {
				str = str + msg;
				isTrue = false;

			} else {
				str = str + ", " + msg;
			}

		}
		System.out.println(str);

	} // test4() end

	public static void test3() {
		// 3명의 학생 점수를 입력받아 합계와 평균구하기
		Scanner scn = new Scanner(System.in);
		int sum = 0;
		for (int i = 1; i <= 3; i++) {
			System.out.println("학생 점수 입력>>");
			String value = scn.nextLine();
			int score = Integer.parseInt(value);
			sum = sum + score;
		}
		double avg = sum / 3.0;
		avg = Math.round(avg * 100) / 100.0;
		System.out.println("합계 :" + sum + " 평균 :" + avg);

	}// user test3 end

	public static void test2() {
		// 숫자 30~100 까지 랜덤숫자를 생성 후 평균과 합계 구하기
		int sum = 0;
		for (int i = 1; i <= 3; i++) {
			int result = (int) (Math.random() * 71) + 30;
			sum = sum + result;
			System.out.println(result);
		}

		double avg = sum / 3.0;
		System.out.println(avg);
		avg = Math.round(avg * 100) / 100.0;
		System.out.println(avg);
		System.out.println("합계 :" + sum + "평균:" + avg);

	} // user test2 끝

	public static void test() {
		int sum = 0;
		for (int i = 0; i <= 10; i++) {
			if (i % 2 == 1) {
				sum = sum + i;
			}
		}
		System.out.println("결과" + sum);
	
	} // user test 끝

}// class 끝
