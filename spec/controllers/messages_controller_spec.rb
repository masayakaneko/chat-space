require 'rails_helper'

describe MessagesController do
  let(:group) { create(:group) }
  let(:user) { create(:user) }

  describe '#index' do

    context 'ログインしている場合' do
      before do
        login user
        get :index, params: { group_id: group.id }
      end

      it '@messageに期待した値が入っていること' do
        expect(assigns(:message)).to be_a_new(Message)
      end

      it '@groupに期待した値が入っていること' do
        expect(assigns(:group)).to eq group
      end

      it 'index.html.erb に遷移すること' do
        expect(response).to render_template :index
      end
    end

    context 'ログインしていない場合' do
      before do
        get :index, params: { group_id: group.id }
      end

      it 'ログイン画面にリダイレクトすること' do
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end

  describe '#create' do
    let(:params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message) } }

    context 'ログインしている場合' do
      before do
        login user
      end

      context '保存に成功した場合' do
      # この中にメッセージの保存に成功した場合のテストを記述
      end

      context '保存に失敗した場合' do
      # この中にメッセージの保存に失敗した場合のテストを記述
      end
    end

    context 'ログインしていない場合' do
    # この中にログインしていない場合のテストを記述
      before do
        get :create, params: params
      end

    end
  end
end