import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://cineai-njbu.onrender.com/usuarios/registrar'; // URL da sua API

  constructor(private http: HttpClient) {}
  //logar conseguir token e id do usuario
  login(email: string, senha: string): Observable<any> {
    const body = { email, senha };
    return this.http.post<any>('https://cineai-njbu.onrender.com/usuarios/login', body);
  }
  //registrar um novo usuario
  registrar(nome:string,email: string, senha: string): Observable<any> {
    const body = { nome, email, senha };
    return this.http.post<any>(this.url, body);
  }
  //pegar filmes filtrados por generos
  get_filme_genre(genre_id:string , limit:string): Observable<any> {
    return this.http.get<any>(`https://cineai-njbu.onrender.com/movies/genre/${genre_id}?limit=${limit}`);
  }
  //guarda as preferencias do usuario através do id
  put_preference(user_id:string , filme_id:string): Observable<any> {
    const body = { user_id, filme_id };
    return this.http.post<any>(`https://cineai-njbu.onrender.com/movies/preferencia`,body);
  }
  //pegas as preferencias do usuario
  get_preference(user_id:string): Observable<any> {
    return this.http.get<any>(`https://cineai-njbu.onrender.com/preferencias/${user_id}`);
  }
  //pega um filme similar de acordo com o id de um filme
  get_similar(filme_id:number, limit:number): Observable<any> {
    return this.http.get<any>(`https://cineai-njbu.onrender.com/movies/${filme_id}/similar?limit=${limit}`);
  }
  //pegar filme por genero
  get_film_genre(genre_id:number, limit:number): Observable<any> {
    return this.http.get<any>(`https://cineai-njbu.onrender.com/movies/genre/${genre_id}?limit=${limit}`);
  }
  //buscar todas as avaliações de um usuário
  get_avaliacoes_usuario(user_id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios/${user_id}/avaliacoes`);
  }
  // registrar avaliação de filme (caso ainda não tenha)
  registrar_avaliacao(usuario_id: number, filme_id: number, nota: number, comentario?: string): Observable<any> {
    const body = { 
      usuario_id, 
      nota, 
      comentario: comentario || '' 
    };
    return this.http.post<any>(`${this.baseUrl}/movies/${filme_id}/avaliar`, body);
  }
  // buscar avaliações de um filme específico
  get_avaliacoes_filme(filme_id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movies/${filme_id}/avaliacoes`);
  }
}
