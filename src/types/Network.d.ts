interface LoginRequest {
  email: string;
  senha: string;
}

interface LoginResponseData {
  success: boolean;
  status?: string; //logged_in only?
  nick: string;
  bonus_card?: string;

  error?: "incorrect_login" | "missing_parameter";
}

interface RegistrationRequest {
  email: string;
  senha: string;
  nick: string;
}

interface RegistrationResponseData {
  success: boolean;
  error?:
    | "logado"
    | "falta_parametro"
    | "email_invalido"
    | "email_or_nickname_already_in_use";
  nick?: string;
}

type ServerCard = { numero: string; addrr_img: string };

interface CardsResponseData {
  success: boolean;
  error?: "sessão invalida";
  resultado_cards: ServerCard[];
  cards: string[];
}

interface HitRequest {
  aposta: string[];
}

interface HitResponseData {
  success: boolean;
  error?:
    | "sessão invalida"
    | "falta parametro"
    | "não é json"
    | "não tem aposta"
    | "aposta com menor que 3 cartas"
    | "nem todos as aposta são numeros"
    | "você não tem alguma carta que selecionou"
    | "carta foi repitida mais vezes que no existe baralho"
    | "estás apostando mais cartas do que tens"
    | "erro genérico (8)";
  resultado_aposta: ServerCard[];
  new_cards: string[];
  non_flipped: string[];
}
