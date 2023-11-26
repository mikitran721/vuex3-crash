# CAI DAT

- `vue create vuex-crash` chon vue2
- `npm i --save vuex@3.6.0` cai dat vuex
- `npm i uuid` su dung auto ID
- `npm i axios` su dung dong bo voi `actions`

# NOI DUNG

- su dung state `giua cac component`
- `computed:` du lieu can tinh toan - ko co san
- `data:` du lieu co san/static ~ ref() vue3
- khi su dung `async - await` can dat trong `try-catch`

# VUEX

- can kho/store luu giu data chia se giua cac component
- b1: tao store
- b2: khai bao su dung trong `main.js`
- b3: truy xuat common data tai cac component can thiet
- nhung gi khai bao trong `created` se duoc render ngay khi component hoat dong

## HELPERS

- muc dich: giup tranh viet nhieu state tai component
- helper `mapState from vuex`

## GETTERS

- toi uu code, su dung lai giua cac component
- khai bao trong store/index.js
- helper `mapGetters()` viet tat cho goi Getters (cu phap gon ket hop `computed`)
- co the su dung `getters` ke thua xu ly

## MUTATIONS

- la cach ! de thay doi state khi user tuong tac tren browsers
- khai bao trong `store/index.js`
- ten su dung trong mutation theo dang `KEY_NAME`
- de goi su dung 1 mutation nao do tai component, can goi qua `methods` == tuong ung voi cac function() trong setup() cua vue3
- co the su dung helper `mapMutation`

## ACTIONS

- do mutations luon dong bo, thay doi state don gian lien quan toi UI; neu su dung cho tac vu bat dong bo se ko phu hop.
- de thay doi state theo dang bat dong bo (try..catch; promise) can su dung ACTIONS;
- `actions` de thay doi state; la trung gian giua UI va Mutations de thay doi state;
- co the su dung helpers `mapActions`

## MODULES

- tach state quan ly rieng trong store
- gom quan ly tat ca `getters, actions, mutations` lien quan den state can quan ly
