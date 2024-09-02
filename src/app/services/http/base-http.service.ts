import { environment } from '../../../environments/environment';

export class BaseHttpService {
  get api() {
    return environment.api;
  }
}
