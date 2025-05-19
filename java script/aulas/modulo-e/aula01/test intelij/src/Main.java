
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        //     int a = 2;
        //     int b = 16;
        //     byte MinhaVar = 127;
        //     short Win = 12000;
        //     if (a * 9 == b) {
        //         System.out.println("verdadeiro");
        //     } else {
        //         System.out.println(9);
        //     }

        String[] nomesArr = new String[10];

        ArrayList<String> nomes = new ArrayList<>();
        nomes.add("Gabriel");
        nomes.add("Fernanda");
        nomes.add("zeca");


        for(int i = 0; i < nomes.size(); i++){
            System.out.println(nomes.get(i));
        }

        double resultado = 109.623;
        int resultadoint = (int) resultado;
        System.out.println(resultadoint);

        Carro meuCarro = new Carro("opala");
        Carro meuCarro2 = new Carro("gol");
        Carro meuCarro3 = new Carro("BMW");
        System.out.println(meuCarro);
        System.out.println(meuCarro2);
        System.out.println(meuCarro3);
    }
}


class Carro {
    String modelo;

    public Carro(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public String toString() {
        return "Modelo: " + modelo;
    }
}
