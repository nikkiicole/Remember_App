require "test_helper"

class MemoirsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @memoir = memoirs(:one)
  end

  test "should get index" do
    get memoirs_url, as: :json
    assert_response :success
  end

  test "should create memoir" do
    assert_difference('Memoir.count') do
      post memoirs_url, params: { memoir: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show memoir" do
    get memoir_url(@memoir), as: :json
    assert_response :success
  end

  test "should update memoir" do
    patch memoir_url(@memoir), params: { memoir: {  } }, as: :json
    assert_response 200
  end

  test "should destroy memoir" do
    assert_difference('Memoir.count', -1) do
      delete memoir_url(@memoir), as: :json
    end

    assert_response 204
  end
end
