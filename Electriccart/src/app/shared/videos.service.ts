import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/Operators';
import { Videos} from './videos.model';
@Injectable()
export class VideosService {
 selectedVideos : Videos;
 videos : Videos[];
 readonly baseURL = 'http://localhost:3000/videos';
  constructor(private http:HttpClient) { }

  postVideos(videos:Videos){
    return this.http.post(this.baseURL,videos);
  }

  getVideoList(){
    return this.http.get(this.baseURL);
  }
  putVideos(videos:Videos){
    return this.http.put(this.baseURL+ `/${videos._id}`,videos);
}

deleteVideos(_id: string) {
  return this.http.delete(this.baseURL + `/${_id}`);
}
}
