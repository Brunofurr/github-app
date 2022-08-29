export interface UserEvent {
    "id": string;
    "type": string;
    "actor": Actor,
    "repo": Repo,
    "payload": Payload;
    "public": boolean;
    "created_at": string;
}

export interface Actor {
    "id": number;
    "login": string;
    "display_login": string;
    "gravatar_id": string;
    "url": string;
    "avatar_url": string;
}

export interface Repo {
    "id": number;
    "name": string;
    "url": string;
}

export interface Payload {
    "ref": string;
    "ref_type": string;
    "master_branch": string;
    "description": string;
    "pusher_type": string;
}