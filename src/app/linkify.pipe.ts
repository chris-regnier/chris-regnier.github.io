import { Pipe, PipeTransform                                                   } from '@angular/core';
import { DomSanitizer, SafeHtml                                                } from '@angular/platform-browser'

@Pipe({
    name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

    constructor(private _sanitizer: DomSanitizer){

    }

    transform(value: any, args?: any): any {
        let replacedText = this._replaceLinks(value, args);
        return this._sanitizer.bypassSecurityTrustHtml(replacedText);
    }

    private _replaceLinks(text: string, links: Array<any>) {
        let newString = text;
        for( let link of links ){
            let searchTerm = new RegExp(link.search, 'gi');
            let href = link.href;
            let className = link.class;
            let replaceText = `<a target="_blank" href="${href}" class="${className}">${link.search}</a>`;
            newString = newString.replace(searchTerm, replaceText);
        }
        return newString;
    }

}
